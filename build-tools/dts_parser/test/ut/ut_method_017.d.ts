/**
 * the ut for method in namespace
 */
export namespace test {
  /**
   * the ut for method in sourcefile, method has permission
   * 
   * @permission ohos.permission.GRANT_SENSITIVE_PERMISSIONS
   */
  function test(param1: string): Promise<Want>;

  /**
   * the ut for method in sourcefile, method has permissions
   * 
   * @permission ohos.permission.GET_SENSITIVE_PERMISSIONS or ohos.permission.GRANT_SENSITIVE_PERMISSIONS or ohos.permission.REVOKE_SENSITIVE_PERMISSIONS
   */
  function test(param1: string): Promise<Want>;

  /**
   * the ut for method in sourcefile, method has permissions
   * 
   * @permission
   */
  function test(param1: string): Promise<Want>;
}