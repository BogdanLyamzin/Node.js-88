const messageList = {
  401: "Unauthorized",
  404: "Not found",
  409: "Conflict",
};
export default function HttpError(status, message = messageList[status]) {
  const error = new Error(message);
  error.status = status;
  return error;
}
