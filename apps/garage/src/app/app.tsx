import { useState, useEffect } from 'react';
import { MainHeading, CarForm, Card } from 'libs/shared-components/src';
import { useQuery, useQueryClient, useMutation } from '@tanstack/react-query';

export function App() {
  const queryClient = useQueryClient();
  const { data, isLoading, isError, isSuccess } = useQuery<MyNamespace.ICar[]>(
    ['cars'],
    () => fetch('http://localhost:3000/cars').then((res) => res.json()),
    { refetchOnWindowFocus: false, staleTime: 10000 }
  );

  const mutation = useMutation(
    (newCar: MyNamespace.ICar) => {
      return fetch('http://localhost:3000/cars', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCar),
      }).then((res) => res.json());
    },
    {
      onMutate: async (newCar) => {
        // cancel any outgoing ["cars"] queries
        queryClient.cancelQueries(['cars']);

        // Grab the existing data - ICar[] - cache it
        const cachedData = queryClient.getQueryData<MyNamespace.ICar[]>([
          'cars',
        ]);

        // Update the query cache with the new car
        queryClient.setQueryData<MyNamespace.ICar[]>(
          ['cars'],
          [...(cachedData ?? []), newCar]
        );

        // return the cached values, in case we error out. This goes into `context`.
        return { cachedData };
      },
      onError: (error, variables, context) => {
        console.log(error);
        queryClient.setQueryData(['cars'], context?.cachedData || []);
      },
      onSettled: () => {
        queryClient.invalidateQueries(['cars']);
      },
    }
  );

  // 1) after we post to the API, refetch all of the ["cars"] query data
  // const onSubmit = (newCar: MyNamespace.ICarFormData) => {
  //   const carToGoToApi = { ...newCar, price: Number(newCar.price) };
  //   mutation.mutate(carToGoToApi, {
  //     onSuccess: () => {
  //       queryClient.invalidateQueries(['cars']);
  //     },
  //   });
  // };

  // 2) When we get response from the API, it includes a new car { id: "", make: "" }
  // - dump this object into the query cache
  // const onSubmit = (newCar: MyNamespace.ICarFormData) => {
  //   const carToGoToApi = { ...newCar, price: Number(newCar.price) };
  //   mutation.mutate(carToGoToApi, {
  //     onSuccess: (newCar: MyNamespace.ICar) => {
  //       queryClient.setQueryData<MyNamespace.ICar[]>(['cars'], (oldData) => [
  //         ...(oldData ?? []),
  //         newCar,
  //       ]);
  //     },
  //   });
  // };

  // 3) Optimistic updates - put the new car object in the cache BEFORE it goes the API
  // If the API gives an error, roll back the UI update
  // If not, optionally refetch data.
  const onSubmit = (newCar: MyNamespace.ICarFormData) => {
    const carToGoToApi = { ...newCar, price: Number(newCar.price) };
    mutation.mutate(carToGoToApi, {});
  };

  return (
    <div className={'ch-container'}>
      <CarForm onSubmit={onSubmit} />
      {isLoading && <p>Is Loading</p>}
      {isSuccess &&
        data.map((car) => (
          <Card
            key={car.reg}
            price={car.price}
            reg={car.reg}
            make={car.make}
            model={car.model}
          />
        ))}
    </div>
  );
}

export default App;
