export interface IResolutionState {
  desktopResolution: null | boolean
  firstBreakpoint: number
}

export enum ResolutionActionsTypes {
  SET_DESKTOP_RESOLUTION = 'SET_DESKTOP_RESOLUTION'
}

interface ISetDesktopResolutionAction {
  payload: boolean,
  type: ResolutionActionsTypes.SET_DESKTOP_RESOLUTION
}

export type ResolutionAction = ISetDesktopResolutionAction