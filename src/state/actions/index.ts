import { ActionType } from "../action-types";

// payload? = may or may not have a payload and if it does it will be any type

interface SearcHrepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}
interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearcHrepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction;
