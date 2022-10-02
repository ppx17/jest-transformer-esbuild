const mock = jest.fn();

describe("basic", () => {
  it("check if mocks are working", () => {
    mock.mockImplementation(() => "test");
    expect(mock()).toBe("test");
  });
});
