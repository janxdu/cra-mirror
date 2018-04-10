function createAPIError(code, msg) {
  return {
    errorCode: 500,
    errorMsg: '服务调用失败，请稍后再尝试'
  };
}

export { createAPIError };
