class CustomErrorHandler extends Error {
  constructor(status, message) {
    super();
    this.statusCode = status;
    this.errorMsg = message;
  }

  static uncaughtError(message) {
    return new CustomErrorHandler(500, message);
  }
}

module.exports = CustomErrorHandler;
