export default interface JwtTokenProviderDTO {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  }
  token: string;
}