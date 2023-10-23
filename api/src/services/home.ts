export const homes = async () => {
  const startTime = performance.now()
  await new Promise((resolve) => setTimeout(resolve, 1000 * 20))
  const endTime = performance.now()
  console.log('Time taken: ', endTime - startTime)
  return [
    {
      id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      title: 'Home 1',
    },
  ]
}
