import { TSESTree } from '@typescript-eslint/util';
import { Scope } from 'eslint-scope/lib/scope';
import { ScopeManager } from './scope-manager';

/** The scope class for enum. */
export class EnumScope extends Scope {
  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: TSESTree.TSEnumDeclaration | null,
  ) {
    super(scopeManager, 'enum', upperScope, block, false);
  }
}

/** The scope class for empty functions. */
export class EmptyFunctionScope extends Scope {
  constructor(
    scopeManager: ScopeManager,
    upperScope: Scope,
    block: TSESTree.TSDeclareFunction | null,
  ) {
    super(scopeManager, 'empty-function', upperScope, block, false);
  }
}
