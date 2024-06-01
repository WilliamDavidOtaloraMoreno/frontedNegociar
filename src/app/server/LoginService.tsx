import ApiBack from "../utilities/domains/ApiBack";

class LoginService {
  public static async ConsumeService(miObj: any) {
    const dataSend = {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(miObj),
    };

    const URL = ApiBack.URL + ApiBack.LOGIN;
    const response = await fetch(URL, dataSend)
      .then((resiveInfo) => resiveInfo.json())
      .then((miInfo) => {
        return miInfo;
      })
      .catch((myErr) => {
        return myErr;
      });
      return response;
  }
}
export default LoginService;
