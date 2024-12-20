export class SimpleXMLDebugger extends XMLHttpRequest {
  open(
    method: string,
    url: string,
    async?: boolean,
    user?: string | null,
    password?: string | null
  ) {
    // eslint-disable-next-line no-console
    console.log(
      `method: ${method}\n url: ${url}\n async: ${async}\n user: ${user}\n password: ${password}\n`
    );
    super.open(method, url, async, user, password);
  }
}
