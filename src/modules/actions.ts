import {DictationsActions} from './dictation/actions';
import {UserActions} from './user/actions';
import {LoaderActions} from './loader/actions';

export type Actions = DictationsActions | UserActions | LoaderActions;
