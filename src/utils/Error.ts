export default class ErrorClass extends Error {
  public statusCode: number;
  constructor(message: string, statusCode?: number | undefined) {
    super(message);
    this.statusCode = statusCode;
  }
}
