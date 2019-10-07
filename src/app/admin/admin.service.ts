import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private _gry1FunctionActivated: boolean;
  private _gry2FunctionActivated: boolean;
  private _gry3FunctionActivated: boolean;
  private _grzFunctionActivated: boolean;
  private _algoSystemActivated: boolean;
  private _gry1NewUserActivated: boolean;
  private _gry2NewUserActivated: boolean;
  private _gry3NewUserActivated: boolean;
  private _grzNewUserActivated: boolean;
  private _algoSystemNewUserActivated: boolean;

  get gry1FunctionActivated(): boolean {
    return this._gry1FunctionActivated;
  }

  set gry1FunctionActivated(value: boolean) {
    this._gry1FunctionActivated = value;
  }

  get gry2FunctionActivated(): boolean {
    return this._gry2FunctionActivated;
  }

  set gry2FunctionActivated(value: boolean) {
    this._gry2FunctionActivated = value;
  }

  get gry3FunctionActivated(): boolean {
    return this._gry3FunctionActivated;
  }

  set gry3FunctionActivated(value: boolean) {
    this._gry3FunctionActivated = value;
  }

  get grzFunctionActivated(): boolean {
    return this._grzFunctionActivated;
  }

  set grzFunctionActivated(value: boolean) {
    this._grzFunctionActivated = value;
  }

  get algoSystemActivated(): boolean {
    return this._algoSystemActivated;
  }

  set algoSystemActivated(value: boolean) {
    this._algoSystemActivated = value;
  }
  
  get gry1NewUserActivated(): boolean {
    return this._gry1NewUserActivated;
  }

  set gry1NewUserActivated(value: boolean) {
    this._gry1NewUserActivated = value;
  }

  get gry2NewUserActivated(): boolean {
    return this._gry2NewUserActivated;
  }

  set gry2NewUserActivated(value: boolean) {
    this._gry2NewUserActivated = value;
  }

  get gry3NewUserActivated(): boolean {
    return this._gry3NewUserActivated;
  }

  set gry3NewUserActivated(value: boolean) {
    this._gry3NewUserActivated = value;
  }

  get grzNewUserActivated(): boolean {
    return this._grzNewUserActivated;
  }

  set grzNewUserActivated(value: boolean) {
    this._grzNewUserActivated = value;
  }

  get algoSystemNewUserActivated(): boolean {
    return this._algoSystemNewUserActivated;
  }

  set algoSystemNewUserActivated(value: boolean) {
    this._algoSystemNewUserActivated = value;
  }

  constructor() { }
}
