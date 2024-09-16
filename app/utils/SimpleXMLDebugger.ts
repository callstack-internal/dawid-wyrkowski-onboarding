export class SimpleXMLDebugger extends XMLHttpRequest {
  constructor() {
    super();
  }

  open(
    method: string,
    url: string,
    async?: boolean,
    user?: string | null,
    password?: string | null
  ) {
    console.log(
      `method: ${method}\n url: ${url}\n async: ${async}\n user: ${user}\n password: ${password}\n`
    );
    super.open(method, url, async, user, password);
  }
}
