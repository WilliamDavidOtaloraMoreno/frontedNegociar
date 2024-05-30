class AccessUser {
  public username: string;
  public passwordHash: string;
  constructor(username: string, passwordHash: string) {
    this.username = username;
    this.passwordHash = passwordHash;
  }
}
export default AccessUser;