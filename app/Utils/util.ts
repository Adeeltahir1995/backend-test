export const setSuccessResponse = (code: number, message: string, data: {} | null) => {
  return {
    code,
    message,
    data,
  }
}

export const setErrorResponse = (code: number, message: string, error: string) => {
  return {
    code,
    message,
    error,
  }
}

export const sendResponse = (response, respData) => {
  return response.status(respData.code).send(respData);
};
