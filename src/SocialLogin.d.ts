import { IInitializationResult, ILoginResult, Social } from "./SocialLogin-common";
export declare class SocialLogin extends Social {
    init(result: IInitializationResult): IInitializationResult;
    loginWithFacebook(callback: (result: Partial<ILoginResult>) => void): void;
    loginWithGoogle(callback: (result: Partial<ILoginResult>) => void): void;
    loginWithTwitter(callback: (result: Partial<ILoginResult>) => void): void;
    logOut(callback: () => void): void;
}
