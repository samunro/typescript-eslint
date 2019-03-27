import { TSESTree } from '@typescript-eslint/util';
import EslintScopeManager, {
  ScopeManagerOptions,
} from 'eslint-scope/lib/scope-manager';
import { Scope } from 'eslint-scope/lib/scope';
import { EmptyFunctionScope, EnumScope } from './scopes';

/**
 * based on eslint-scope
 */
export class ScopeManager extends EslintScopeManager {
  scopes!: Scope[];
  globalScope!: Scope;

  constructor(options: ScopeManagerOptions) {
    super(options);
  }

  /** @internal */
  __nestEnumScope(node: TSESTree.TSEnumDeclaration) {
    return this.__nestScope(new EnumScope(this, this.__currentScope, node));
  }

  /** @internal */
  __nestEmptyFunctionScope(node: TSESTree.TSDeclareFunction) {
    return this.__nestScope(
      new EmptyFunctionScope(this, this.__currentScope, node),
    );
  }
}
