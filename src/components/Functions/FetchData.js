export function fetchData(
  setIsLoading,
  userCode,
  start,
  offset,
  setListData,
  setStart,
  setError
) {
  setIsLoading(true);
  fetch(
    `noSessionPreviewAwards?userCode=${userCode}&start=${start}&offset=${offset}`,
    {
      method: "POST",
    }
  )
    .then((response) => response.json())
    .then((res) => {
      setListData((prev) => [...prev, ...res.result]);
      setStart((prev) => prev + res.length);
      setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setError(true);
      setIsLoading(false);
    });
}
