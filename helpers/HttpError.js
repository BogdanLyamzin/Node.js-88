const messageList = {
  404: "Not found",
};
export function HttpError(status, message = messageList[status]) {
  const error = new Error(message);
  error.status = status;
  return error;
}
