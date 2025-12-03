import { customSessionClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

jest.mock("better-auth/react", () => ({
  createAuthClient: jest.fn(),
}));

jest.mock("better-auth/client/plugins", () => ({
  customSessionClient: jest.fn(),
}));

jest.mock("@/infra/auth/auth", () => ({
  auth: {},
}));

describe("Auth Client Configuration", () => {
  it("should initialize authClient with correct baseURL and plugins", () => {
    const mockBaseUrl = "https://api.teste.com";
    const mockPluginInstance = { id: "custom-plugin" };
    process.env.BETTER_AUTH_URL = mockBaseUrl;
    (customSessionClient as jest.Mock).mockReturnValue(mockPluginInstance);
    jest.isolateModules(() => {
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      require("@/infra/auth/auth-client");
    });
    // ---------------------

    expect(customSessionClient).toHaveBeenCalled();
    expect(createAuthClient).toHaveBeenCalledWith({
      baseURL: mockBaseUrl,
      plugins: expect.arrayContaining([mockPluginInstance]),
    });
  });
});
