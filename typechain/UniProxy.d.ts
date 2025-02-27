/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface UniProxyInterface extends ethers.utils.Interface {
  functions: {
    "addPosition(address,uint8)": FunctionFragment;
    "appendList(address,address[])": FunctionFragment;
    "checkPriceChange(address,uint32,uint256)": FunctionFragment;
    "customDeposit(address,uint256,uint256,uint256)": FunctionFragment;
    "deltaScale()": FunctionFragment;
    "deposit(uint256,uint256,address,address,uint256[4])": FunctionFragment;
    "depositDelta()": FunctionFragment;
    "freeDeposit()": FunctionFragment;
    "getDepositAmount(address,address,uint256)": FunctionFragment;
    "getSqrtTwapX96(address,uint32)": FunctionFragment;
    "owner()": FunctionFragment;
    "positions(address)": FunctionFragment;
    "priceThreshold()": FunctionFragment;
    "removeListed(address,address)": FunctionFragment;
    "setDeltaScale(uint256)": FunctionFragment;
    "setDepositDelta(uint256)": FunctionFragment;
    "setPriceThreshold(uint256)": FunctionFragment;
    "setPriceThresholdPos(address,uint256)": FunctionFragment;
    "setTwapInterval(uint32)": FunctionFragment;
    "setTwapOverride(address,bool,uint32)": FunctionFragment;
    "toggleDepositFree()": FunctionFragment;
    "toggleDepositFreeOverride(address)": FunctionFragment;
    "toggleDepositOverride(address)": FunctionFragment;
    "toggleTwap()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "twapCheck()": FunctionFragment;
    "twapInterval()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addPosition",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "appendList",
    values: [string, string[]]
  ): string;
  encodeFunctionData(
    functionFragment: "checkPriceChange",
    values: [string, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "customDeposit",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "deltaScale",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deposit",
    values: [
      BigNumberish,
      BigNumberish,
      string,
      string,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "depositDelta",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "freeDeposit",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDepositAmount",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSqrtTwapX96",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "positions", values: [string]): string;
  encodeFunctionData(
    functionFragment: "priceThreshold",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "removeListed",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setDeltaScale",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setDepositDelta",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceThreshold",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setPriceThresholdPos",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTwapInterval",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setTwapOverride",
    values: [string, boolean, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "toggleDepositFree",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "toggleDepositFreeOverride",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "toggleDepositOverride",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "toggleTwap",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "twapCheck", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "twapInterval",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "addPosition",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "appendList", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkPriceChange",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "customDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "deltaScale", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deposit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositDelta",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "freeDeposit",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDepositAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSqrtTwapX96",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "positions", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "priceThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "removeListed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDeltaScale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDepositDelta",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceThreshold",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setPriceThresholdPos",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTwapInterval",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTwapOverride",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleDepositFree",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleDepositFreeOverride",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "toggleDepositOverride",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "toggleTwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "twapCheck", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "twapInterval",
    data: BytesLike
  ): Result;

  events: {
    "CustomDeposit(address,uint256,uint256,uint256)": EventFragment;
    "DeltaScaleSet(uint256)": EventFragment;
    "DepositDeltaSet(uint256)": EventFragment;
    "DepositFreeOverrideToggled(address)": EventFragment;
    "DepositFreeToggled()": EventFragment;
    "DepositOverrideToggled(address)": EventFragment;
    "ListAppended(address,address[])": EventFragment;
    "ListRemoved(address,address)": EventFragment;
    "PositionAdded(address,uint8)": EventFragment;
    "PriceThresholdPosSet(address,uint256)": EventFragment;
    "PriceThresholdSet(uint256)": EventFragment;
    "TwapIntervalSet(uint32)": EventFragment;
    "TwapOverrideSet(address,bool,uint32)": EventFragment;
    "TwapToggled()": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CustomDeposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DeltaScaleSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositDeltaSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositFreeOverrideToggled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositFreeToggled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositOverrideToggled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ListAppended"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ListRemoved"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PositionAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceThresholdPosSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PriceThresholdSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TwapIntervalSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TwapOverrideSet"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TwapToggled"): EventFragment;
}

export type CustomDepositEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber] & {
    arg0: string;
    arg1: BigNumber;
    arg2: BigNumber;
    arg3: BigNumber;
  }
>;

export type DeltaScaleSetEvent = TypedEvent<
  [BigNumber] & { _deltaScale: BigNumber }
>;

export type DepositDeltaSetEvent = TypedEvent<
  [BigNumber] & { _depositDelta: BigNumber }
>;

export type DepositFreeOverrideToggledEvent = TypedEvent<
  [string] & { pos: string }
>;

export type DepositFreeToggledEvent = TypedEvent<[] & {}>;

export type DepositOverrideToggledEvent = TypedEvent<
  [string] & { pos: string }
>;

export type ListAppendedEvent = TypedEvent<
  [string, string[]] & { pos: string; listed: string[] }
>;

export type ListRemovedEvent = TypedEvent<
  [string, string] & { pos: string; listed: string }
>;

export type PositionAddedEvent = TypedEvent<
  [string, number] & { arg0: string; arg1: number }
>;

export type PriceThresholdPosSetEvent = TypedEvent<
  [string, BigNumber] & { pos: string; _priceThreshold: BigNumber }
>;

export type PriceThresholdSetEvent = TypedEvent<
  [BigNumber] & { _priceThreshold: BigNumber }
>;

export type TwapIntervalSetEvent = TypedEvent<
  [number] & { _twapInterval: number }
>;

export type TwapOverrideSetEvent = TypedEvent<
  [string, boolean, number] & {
    pos: string;
    twapOverride: boolean;
    _twapInterval: number;
  }
>;

export type TwapToggledEvent = TypedEvent<[] & {}>;

export class UniProxy extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: UniProxyInterface;

  functions: {
    addPosition(
      pos: string,
      version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    appendList(
      pos: string,
      listed: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    checkPriceChange(
      pos: string,
      _twapInterval: BigNumberish,
      _priceThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { price: BigNumber }>;

    customDeposit(
      pos: string,
      deposit0Max: BigNumberish,
      deposit1Max: BigNumberish,
      maxTotalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    deltaScale(overrides?: CallOverrides): Promise<[BigNumber]>;

    deposit(
      deposit0: BigNumberish,
      deposit1: BigNumberish,
      to: string,
      pos: string,
      minIn: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    depositDelta(overrides?: CallOverrides): Promise<[BigNumber]>;

    freeDeposit(overrides?: CallOverrides): Promise<[boolean]>;

    getDepositAmount(
      pos: string,
      token: string,
      _deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountStart: BigNumber; amountEnd: BigNumber }
    >;

    getSqrtTwapX96(
      pos: string,
      _twapInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { sqrtPriceX96: BigNumber }>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    positions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        boolean,
        number,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        version: number;
        twapOverride: boolean;
        twapInterval: number;
        priceThreshold: BigNumber;
        depositOverride: boolean;
        deposit0Max: BigNumber;
        deposit1Max: BigNumber;
        maxTotalSupply: BigNumber;
        freeDeposit: boolean;
      }
    >;

    priceThreshold(overrides?: CallOverrides): Promise<[BigNumber]>;

    removeListed(
      pos: string,
      listed: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDeltaScale(
      _deltaScale: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setDepositDelta(
      _depositDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPriceThreshold(
      _priceThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setPriceThresholdPos(
      pos: string,
      _priceThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTwapInterval(
      _twapInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setTwapOverride(
      pos: string,
      twapOverride: boolean,
      _twapInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    toggleDepositFree(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    toggleDepositFreeOverride(
      pos: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    toggleDepositOverride(
      pos: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    toggleTwap(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    twapCheck(overrides?: CallOverrides): Promise<[boolean]>;

    twapInterval(overrides?: CallOverrides): Promise<[number]>;
  };

  addPosition(
    pos: string,
    version: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  appendList(
    pos: string,
    listed: string[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  checkPriceChange(
    pos: string,
    _twapInterval: BigNumberish,
    _priceThreshold: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  customDeposit(
    pos: string,
    deposit0Max: BigNumberish,
    deposit1Max: BigNumberish,
    maxTotalSupply: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  deltaScale(overrides?: CallOverrides): Promise<BigNumber>;

  deposit(
    deposit0: BigNumberish,
    deposit1: BigNumberish,
    to: string,
    pos: string,
    minIn: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  depositDelta(overrides?: CallOverrides): Promise<BigNumber>;

  freeDeposit(overrides?: CallOverrides): Promise<boolean>;

  getDepositAmount(
    pos: string,
    token: string,
    _deposit: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & { amountStart: BigNumber; amountEnd: BigNumber }
  >;

  getSqrtTwapX96(
    pos: string,
    _twapInterval: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  positions(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [
      number,
      boolean,
      number,
      BigNumber,
      boolean,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean
    ] & {
      version: number;
      twapOverride: boolean;
      twapInterval: number;
      priceThreshold: BigNumber;
      depositOverride: boolean;
      deposit0Max: BigNumber;
      deposit1Max: BigNumber;
      maxTotalSupply: BigNumber;
      freeDeposit: boolean;
    }
  >;

  priceThreshold(overrides?: CallOverrides): Promise<BigNumber>;

  removeListed(
    pos: string,
    listed: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDeltaScale(
    _deltaScale: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setDepositDelta(
    _depositDelta: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPriceThreshold(
    _priceThreshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setPriceThresholdPos(
    pos: string,
    _priceThreshold: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTwapInterval(
    _twapInterval: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setTwapOverride(
    pos: string,
    twapOverride: boolean,
    _twapInterval: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  toggleDepositFree(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  toggleDepositFreeOverride(
    pos: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  toggleDepositOverride(
    pos: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  toggleTwap(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  twapCheck(overrides?: CallOverrides): Promise<boolean>;

  twapInterval(overrides?: CallOverrides): Promise<number>;

  callStatic: {
    addPosition(
      pos: string,
      version: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    appendList(
      pos: string,
      listed: string[],
      overrides?: CallOverrides
    ): Promise<void>;

    checkPriceChange(
      pos: string,
      _twapInterval: BigNumberish,
      _priceThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    customDeposit(
      pos: string,
      deposit0Max: BigNumberish,
      deposit1Max: BigNumberish,
      maxTotalSupply: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    deltaScale(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      deposit0: BigNumberish,
      deposit1: BigNumberish,
      to: string,
      pos: string,
      minIn: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositDelta(overrides?: CallOverrides): Promise<BigNumber>;

    freeDeposit(overrides?: CallOverrides): Promise<boolean>;

    getDepositAmount(
      pos: string,
      token: string,
      _deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { amountStart: BigNumber; amountEnd: BigNumber }
    >;

    getSqrtTwapX96(
      pos: string,
      _twapInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    positions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        boolean,
        number,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean
      ] & {
        version: number;
        twapOverride: boolean;
        twapInterval: number;
        priceThreshold: BigNumber;
        depositOverride: boolean;
        deposit0Max: BigNumber;
        deposit1Max: BigNumber;
        maxTotalSupply: BigNumber;
        freeDeposit: boolean;
      }
    >;

    priceThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    removeListed(
      pos: string,
      listed: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setDeltaScale(
      _deltaScale: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setDepositDelta(
      _depositDelta: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPriceThreshold(
      _priceThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setPriceThresholdPos(
      pos: string,
      _priceThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTwapInterval(
      _twapInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setTwapOverride(
      pos: string,
      twapOverride: boolean,
      _twapInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    toggleDepositFree(overrides?: CallOverrides): Promise<void>;

    toggleDepositFreeOverride(
      pos: string,
      overrides?: CallOverrides
    ): Promise<void>;

    toggleDepositOverride(
      pos: string,
      overrides?: CallOverrides
    ): Promise<void>;

    toggleTwap(overrides?: CallOverrides): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    twapCheck(overrides?: CallOverrides): Promise<boolean>;

    twapInterval(overrides?: CallOverrides): Promise<number>;
  };

  filters: {
    "CustomDeposit(address,uint256,uint256,uint256)"(
      undefined?: null,
      undefined?: null,
      undefined?: null,
      undefined?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      { arg0: string; arg1: BigNumber; arg2: BigNumber; arg3: BigNumber }
    >;

    CustomDeposit(
      undefined?: null,
      undefined?: null,
      undefined?: null,
      undefined?: null
    ): TypedEventFilter<
      [string, BigNumber, BigNumber, BigNumber],
      { arg0: string; arg1: BigNumber; arg2: BigNumber; arg3: BigNumber }
    >;

    "DeltaScaleSet(uint256)"(
      _deltaScale?: null
    ): TypedEventFilter<[BigNumber], { _deltaScale: BigNumber }>;

    DeltaScaleSet(
      _deltaScale?: null
    ): TypedEventFilter<[BigNumber], { _deltaScale: BigNumber }>;

    "DepositDeltaSet(uint256)"(
      _depositDelta?: null
    ): TypedEventFilter<[BigNumber], { _depositDelta: BigNumber }>;

    DepositDeltaSet(
      _depositDelta?: null
    ): TypedEventFilter<[BigNumber], { _depositDelta: BigNumber }>;

    "DepositFreeOverrideToggled(address)"(
      pos?: null
    ): TypedEventFilter<[string], { pos: string }>;

    DepositFreeOverrideToggled(
      pos?: null
    ): TypedEventFilter<[string], { pos: string }>;

    "DepositFreeToggled()"(): TypedEventFilter<[], {}>;

    DepositFreeToggled(): TypedEventFilter<[], {}>;

    "DepositOverrideToggled(address)"(
      pos?: null
    ): TypedEventFilter<[string], { pos: string }>;

    DepositOverrideToggled(
      pos?: null
    ): TypedEventFilter<[string], { pos: string }>;

    "ListAppended(address,address[])"(
      pos?: null,
      listed?: null
    ): TypedEventFilter<[string, string[]], { pos: string; listed: string[] }>;

    ListAppended(
      pos?: null,
      listed?: null
    ): TypedEventFilter<[string, string[]], { pos: string; listed: string[] }>;

    "ListRemoved(address,address)"(
      pos?: null,
      listed?: null
    ): TypedEventFilter<[string, string], { pos: string; listed: string }>;

    ListRemoved(
      pos?: null,
      listed?: null
    ): TypedEventFilter<[string, string], { pos: string; listed: string }>;

    "PositionAdded(address,uint8)"(
      undefined?: null,
      undefined?: null
    ): TypedEventFilter<[string, number], { arg0: string; arg1: number }>;

    PositionAdded(
      undefined?: null,
      undefined?: null
    ): TypedEventFilter<[string, number], { arg0: string; arg1: number }>;

    "PriceThresholdPosSet(address,uint256)"(
      pos?: null,
      _priceThreshold?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { pos: string; _priceThreshold: BigNumber }
    >;

    PriceThresholdPosSet(
      pos?: null,
      _priceThreshold?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { pos: string; _priceThreshold: BigNumber }
    >;

    "PriceThresholdSet(uint256)"(
      _priceThreshold?: null
    ): TypedEventFilter<[BigNumber], { _priceThreshold: BigNumber }>;

    PriceThresholdSet(
      _priceThreshold?: null
    ): TypedEventFilter<[BigNumber], { _priceThreshold: BigNumber }>;

    "TwapIntervalSet(uint32)"(
      _twapInterval?: null
    ): TypedEventFilter<[number], { _twapInterval: number }>;

    TwapIntervalSet(
      _twapInterval?: null
    ): TypedEventFilter<[number], { _twapInterval: number }>;

    "TwapOverrideSet(address,bool,uint32)"(
      pos?: null,
      twapOverride?: null,
      _twapInterval?: null
    ): TypedEventFilter<
      [string, boolean, number],
      { pos: string; twapOverride: boolean; _twapInterval: number }
    >;

    TwapOverrideSet(
      pos?: null,
      twapOverride?: null,
      _twapInterval?: null
    ): TypedEventFilter<
      [string, boolean, number],
      { pos: string; twapOverride: boolean; _twapInterval: number }
    >;

    "TwapToggled()"(): TypedEventFilter<[], {}>;

    TwapToggled(): TypedEventFilter<[], {}>;
  };

  estimateGas: {
    addPosition(
      pos: string,
      version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    appendList(
      pos: string,
      listed: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    checkPriceChange(
      pos: string,
      _twapInterval: BigNumberish,
      _priceThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    customDeposit(
      pos: string,
      deposit0Max: BigNumberish,
      deposit1Max: BigNumberish,
      maxTotalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    deltaScale(overrides?: CallOverrides): Promise<BigNumber>;

    deposit(
      deposit0: BigNumberish,
      deposit1: BigNumberish,
      to: string,
      pos: string,
      minIn: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    depositDelta(overrides?: CallOverrides): Promise<BigNumber>;

    freeDeposit(overrides?: CallOverrides): Promise<BigNumber>;

    getDepositAmount(
      pos: string,
      token: string,
      _deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getSqrtTwapX96(
      pos: string,
      _twapInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    positions(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    priceThreshold(overrides?: CallOverrides): Promise<BigNumber>;

    removeListed(
      pos: string,
      listed: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDeltaScale(
      _deltaScale: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setDepositDelta(
      _depositDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPriceThreshold(
      _priceThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setPriceThresholdPos(
      pos: string,
      _priceThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTwapInterval(
      _twapInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setTwapOverride(
      pos: string,
      twapOverride: boolean,
      _twapInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    toggleDepositFree(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    toggleDepositFreeOverride(
      pos: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    toggleDepositOverride(
      pos: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    toggleTwap(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    twapCheck(overrides?: CallOverrides): Promise<BigNumber>;

    twapInterval(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addPosition(
      pos: string,
      version: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    appendList(
      pos: string,
      listed: string[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    checkPriceChange(
      pos: string,
      _twapInterval: BigNumberish,
      _priceThreshold: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    customDeposit(
      pos: string,
      deposit0Max: BigNumberish,
      deposit1Max: BigNumberish,
      maxTotalSupply: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    deltaScale(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deposit(
      deposit0: BigNumberish,
      deposit1: BigNumberish,
      to: string,
      pos: string,
      minIn: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    depositDelta(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    freeDeposit(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getDepositAmount(
      pos: string,
      token: string,
      _deposit: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSqrtTwapX96(
      pos: string,
      _twapInterval: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    positions(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    priceThreshold(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeListed(
      pos: string,
      listed: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDeltaScale(
      _deltaScale: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setDepositDelta(
      _depositDelta: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPriceThreshold(
      _priceThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setPriceThresholdPos(
      pos: string,
      _priceThreshold: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTwapInterval(
      _twapInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setTwapOverride(
      pos: string,
      twapOverride: boolean,
      _twapInterval: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    toggleDepositFree(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    toggleDepositFreeOverride(
      pos: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    toggleDepositOverride(
      pos: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    toggleTwap(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    twapCheck(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    twapInterval(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
