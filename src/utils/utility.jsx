/* eslint-disable no-unused-vars */
export const createQueryParams = (data) => {
  const params = Object.entries(data)
    .filter(
      ([_, value]) => value !== null && value !== undefined && value !== ""
    )
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
  return params ? `?${params}` : "";
};
