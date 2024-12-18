// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt,
} from "@graphprotocol/graph-ts";

export class ArbitratorParamsSet extends ethereum.Event {
  get params(): ArbitratorParamsSet__Params {
    return new ArbitratorParamsSet__Params(this);
  }
}

export class ArbitratorParamsSet__Params {
  _event: ArbitratorParamsSet;

  constructor(event: ArbitratorParamsSet) {
    this._event = event;
  }

  get arbitrator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get feeRate(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ArbitratorPaused extends ethereum.Event {
  get params(): ArbitratorPaused__Params {
    return new ArbitratorPaused__Params(this);
  }
}

export class ArbitratorPaused__Params {
  _event: ArbitratorPaused;

  constructor(event: ArbitratorPaused) {
    this._event = event;
  }

  get arbitrator(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class ArbitratorStatusChanged extends ethereum.Event {
  get params(): ArbitratorStatusChanged__Params {
    return new ArbitratorStatusChanged__Params(this);
  }
}

export class ArbitratorStatusChanged__Params {
  _event: ArbitratorStatusChanged;

  constructor(event: ArbitratorStatusChanged) {
    this._event = event;
  }

  get arbitrator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get status(): i32 {
    return this._event.parameters[1].value.toI32();
  }
}

export class ArbitratorUnpaused extends ethereum.Event {
  get params(): ArbitratorUnpaused__Params {
    return new ArbitratorUnpaused__Params(this);
  }
}

export class ArbitratorUnpaused__Params {
  _event: ArbitratorUnpaused;

  constructor(event: ArbitratorUnpaused) {
    this._event = event;
  }

  get arbitrator(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class CompensationManagerUpdated extends ethereum.Event {
  get params(): CompensationManagerUpdated__Params {
    return new CompensationManagerUpdated__Params(this);
  }
}

export class CompensationManagerUpdated__Params {
  _event: CompensationManagerUpdated;

  constructor(event: CompensationManagerUpdated) {
    this._event = event;
  }

  get oldManager(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newManager(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class Initialized1 extends ethereum.Event {
  get params(): Initialized1__Params {
    return new Initialized1__Params(this);
  }
}

export class Initialized1__Params {
  _event: Initialized1;

  constructor(event: Initialized1) {
    this._event = event;
  }

  get transactionManager(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get compensationManager(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class OperatorSet extends ethereum.Event {
  get params(): OperatorSet__Params {
    return new OperatorSet__Params(this);
  }
}

export class OperatorSet__Params {
  _event: OperatorSet;

  constructor(event: OperatorSet) {
    this._event = event;
  }

  get arbitrator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get btcPubKey(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get btcAddress(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class RevenueAddressesSet extends ethereum.Event {
  get params(): RevenueAddressesSet__Params {
    return new RevenueAddressesSet__Params(this);
  }
}

export class RevenueAddressesSet__Params {
  _event: RevenueAddressesSet;

  constructor(event: RevenueAddressesSet) {
    this._event = event;
  }

  get arbitrator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get ethAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get btcPubKey(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }

  get btcAddress(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class StakeAdded extends ethereum.Event {
  get params(): StakeAdded__Params {
    return new StakeAdded__Params(this);
  }
}

export class StakeAdded__Params {
  _event: StakeAdded;

  constructor(event: StakeAdded) {
    this._event = event;
  }

  get arbitrator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assetAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class StakeWithdrawn extends ethereum.Event {
  get params(): StakeWithdrawn__Params {
    return new StakeWithdrawn__Params(this);
  }
}

export class StakeWithdrawn__Params {
  _event: StakeWithdrawn;

  constructor(event: StakeWithdrawn) {
    this._event = event;
  }

  get arbitrator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get assetAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TransactionManagerUpdated extends ethereum.Event {
  get params(): TransactionManagerUpdated__Params {
    return new TransactionManagerUpdated__Params(this);
  }
}

export class TransactionManagerUpdated__Params {
  _event: TransactionManagerUpdated;

  constructor(event: TransactionManagerUpdated) {
    this._event = event;
  }

  get oldManager(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newManager(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class ArbitratorManager__getArbitratorInfoResultValue0Struct extends ethereum.Tuple {
  get arbitrator(): Address {
    return this[0].toAddress();
  }

  get currentFeeRate(): BigInt {
    return this[1].toBigInt();
  }

  get pendingFeeRate(): BigInt {
    return this[2].toBigInt();
  }

  get status(): i32 {
    return this[3].toI32();
  }

  get activeTransactionId(): Bytes {
    return this[4].toBytes();
  }

  get ethAmount(): BigInt {
    return this[5].toBigInt();
  }

  get erc20Token(): Address {
    return this[6].toAddress();
  }

  get nftContract(): Address {
    return this[7].toAddress();
  }

  get nftTokenIds(): Array<BigInt> {
    return this[8].toBigIntArray();
  }

  get operator(): Address {
    return this[9].toAddress();
  }

  get operatorBtcPubKey(): Bytes {
    return this[10].toBytes();
  }

  get operatorBtcAddress(): string {
    return this[11].toString();
  }

  get lastArbitrationTime(): BigInt {
    return this[12].toBigInt();
  }

  get revenueBtcPubKey(): Bytes {
    return this[13].toBytes();
  }

  get revenueBtcAddress(): string {
    return this[14].toString();
  }

  get revenueETHAddress(): Address {
    return this[15].toAddress();
  }
}

export class ArbitratorManager extends ethereum.SmartContract {
  static bind(address: Address): ArbitratorManager {
    return new ArbitratorManager("ArbitratorManager", address);
  }

  canUnstake(arbitrator: Address): boolean {
    let result = super.call("canUnstake", "canUnstake(address):(bool)", [
      ethereum.Value.fromAddress(arbitrator),
    ]);

    return result[0].toBoolean();
  }

  try_canUnstake(arbitrator: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("canUnstake", "canUnstake(address):(bool)", [
      ethereum.Value.fromAddress(arbitrator),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  compensationManager(): Address {
    let result = super.call(
      "compensationManager",
      "compensationManager():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_compensationManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "compensationManager",
      "compensationManager():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  configManager(): Address {
    let result = super.call("configManager", "configManager():(address)", []);

    return result[0].toAddress();
  }

  try_configManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "configManager",
      "configManager():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getArbitratorInfo(
    arbitratorAddress: Address,
  ): ArbitratorManager__getArbitratorInfoResultValue0Struct {
    let result = super.call(
      "getArbitratorInfo",
      "getArbitratorInfo(address):((address,uint256,uint256,uint8,bytes32,uint256,address,address,uint256[],address,bytes,string,uint256,bytes,string,address))",
      [ethereum.Value.fromAddress(arbitratorAddress)],
    );

    return changetype<ArbitratorManager__getArbitratorInfoResultValue0Struct>(
      result[0].toTuple(),
    );
  }

  try_getArbitratorInfo(
    arbitratorAddress: Address,
  ): ethereum.CallResult<ArbitratorManager__getArbitratorInfoResultValue0Struct> {
    let result = super.tryCall(
      "getArbitratorInfo",
      "getArbitratorInfo(address):((address,uint256,uint256,uint8,bytes32,uint256,address,address,uint256[],address,bytes,string,uint256,bytes,string,address))",
      [ethereum.Value.fromAddress(arbitratorAddress)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<ArbitratorManager__getArbitratorInfoResultValue0Struct>(
        value[0].toTuple(),
      ),
    );
  }

  getAvailableStake(arbitrator: Address): BigInt {
    let result = super.call(
      "getAvailableStake",
      "getAvailableStake(address):(uint256)",
      [ethereum.Value.fromAddress(arbitrator)],
    );

    return result[0].toBigInt();
  }

  try_getAvailableStake(arbitrator: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getAvailableStake",
      "getAvailableStake(address):(uint256)",
      [ethereum.Value.fromAddress(arbitrator)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getTotalNFTStakeValue(arbitrator: Address): BigInt {
    let result = super.call(
      "getTotalNFTStakeValue",
      "getTotalNFTStakeValue(address):(uint256)",
      [ethereum.Value.fromAddress(arbitrator)],
    );

    return result[0].toBigInt();
  }

  try_getTotalNFTStakeValue(arbitrator: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTotalNFTStakeValue",
      "getTotalNFTStakeValue(address):(uint256)",
      [ethereum.Value.fromAddress(arbitrator)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isActiveArbitrator(arbitratorAddress: Address): boolean {
    let result = super.call(
      "isActiveArbitrator",
      "isActiveArbitrator(address):(bool)",
      [ethereum.Value.fromAddress(arbitratorAddress)],
    );

    return result[0].toBoolean();
  }

  try_isActiveArbitrator(
    arbitratorAddress: Address,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isActiveArbitrator",
      "isActiveArbitrator(address):(bool)",
      [ethereum.Value.fromAddress(arbitratorAddress)],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isOperatorOf(arbitrator: Address, operator: Address): boolean {
    let result = super.call(
      "isOperatorOf",
      "isOperatorOf(address,address):(bool)",
      [
        ethereum.Value.fromAddress(arbitrator),
        ethereum.Value.fromAddress(operator),
      ],
    );

    return result[0].toBoolean();
  }

  try_isOperatorOf(
    arbitrator: Address,
    operator: Address,
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isOperatorOf",
      "isOperatorOf(address,address):(bool)",
      [
        ethereum.Value.fromAddress(arbitrator),
        ethereum.Value.fromAddress(operator),
      ],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  isPaused(arbitrator: Address): boolean {
    let result = super.call("isPaused", "isPaused(address):(bool)", [
      ethereum.Value.fromAddress(arbitrator),
    ]);

    return result[0].toBoolean();
  }

  try_isPaused(arbitrator: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPaused", "isPaused(address):(bool)", [
      ethereum.Value.fromAddress(arbitrator),
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  nftContract(): Address {
    let result = super.call("nftContract", "nftContract():(address)", []);

    return result[0].toAddress();
  }

  try_nftContract(): ethereum.CallResult<Address> {
    let result = super.tryCall("nftContract", "nftContract():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  nftInfo(): Address {
    let result = super.call("nftInfo", "nftInfo():(address)", []);

    return result[0].toAddress();
  }

  try_nftInfo(): ethereum.CallResult<Address> {
    let result = super.tryCall("nftInfo", "nftInfo():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  transactionManager(): Address {
    let result = super.call(
      "transactionManager",
      "transactionManager():(address)",
      [],
    );

    return result[0].toAddress();
  }

  try_transactionManager(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "transactionManager",
      "transactionManager():(address)",
      [],
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  zeroAddress(): Address {
    let result = super.call("zeroAddress", "zeroAddress():(address)", []);

    return result[0].toAddress();
  }

  try_zeroAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall("zeroAddress", "zeroAddress():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class InitTransactionAndCompensationManagerCall extends ethereum.Call {
  get inputs(): InitTransactionAndCompensationManagerCall__Inputs {
    return new InitTransactionAndCompensationManagerCall__Inputs(this);
  }

  get outputs(): InitTransactionAndCompensationManagerCall__Outputs {
    return new InitTransactionAndCompensationManagerCall__Outputs(this);
  }
}

export class InitTransactionAndCompensationManagerCall__Inputs {
  _call: InitTransactionAndCompensationManagerCall;

  constructor(call: InitTransactionAndCompensationManagerCall) {
    this._call = call;
  }

  get _transactionManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _compensationManager(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class InitTransactionAndCompensationManagerCall__Outputs {
  _call: InitTransactionAndCompensationManagerCall;

  constructor(call: InitTransactionAndCompensationManagerCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get _configManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _nftContract(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _nftInfo(): Address {
    return this._call.inputValues[2].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class PauseCall extends ethereum.Call {
  get inputs(): PauseCall__Inputs {
    return new PauseCall__Inputs(this);
  }

  get outputs(): PauseCall__Outputs {
    return new PauseCall__Outputs(this);
  }
}

export class PauseCall__Inputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class PauseCall__Outputs {
  _call: PauseCall;

  constructor(call: PauseCall) {
    this._call = call;
  }
}

export class ReleaseArbitratorCall extends ethereum.Call {
  get inputs(): ReleaseArbitratorCall__Inputs {
    return new ReleaseArbitratorCall__Inputs(this);
  }

  get outputs(): ReleaseArbitratorCall__Outputs {
    return new ReleaseArbitratorCall__Outputs(this);
  }
}

export class ReleaseArbitratorCall__Inputs {
  _call: ReleaseArbitratorCall;

  constructor(call: ReleaseArbitratorCall) {
    this._call = call;
  }

  get arbitrator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get transactionId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class ReleaseArbitratorCall__Outputs {
  _call: ReleaseArbitratorCall;

  constructor(call: ReleaseArbitratorCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class SetArbitratorParamsCall extends ethereum.Call {
  get inputs(): SetArbitratorParamsCall__Inputs {
    return new SetArbitratorParamsCall__Inputs(this);
  }

  get outputs(): SetArbitratorParamsCall__Outputs {
    return new SetArbitratorParamsCall__Outputs(this);
  }
}

export class SetArbitratorParamsCall__Inputs {
  _call: SetArbitratorParamsCall;

  constructor(call: SetArbitratorParamsCall) {
    this._call = call;
  }

  get feeRate(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get deadline(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SetArbitratorParamsCall__Outputs {
  _call: SetArbitratorParamsCall;

  constructor(call: SetArbitratorParamsCall) {
    this._call = call;
  }
}

export class SetArbitratorWorkingCall extends ethereum.Call {
  get inputs(): SetArbitratorWorkingCall__Inputs {
    return new SetArbitratorWorkingCall__Inputs(this);
  }

  get outputs(): SetArbitratorWorkingCall__Outputs {
    return new SetArbitratorWorkingCall__Outputs(this);
  }
}

export class SetArbitratorWorkingCall__Inputs {
  _call: SetArbitratorWorkingCall;

  constructor(call: SetArbitratorWorkingCall) {
    this._call = call;
  }

  get arbitrator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get transactionId(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class SetArbitratorWorkingCall__Outputs {
  _call: SetArbitratorWorkingCall;

  constructor(call: SetArbitratorWorkingCall) {
    this._call = call;
  }
}

export class SetCompensationManagerCall extends ethereum.Call {
  get inputs(): SetCompensationManagerCall__Inputs {
    return new SetCompensationManagerCall__Inputs(this);
  }

  get outputs(): SetCompensationManagerCall__Outputs {
    return new SetCompensationManagerCall__Outputs(this);
  }
}

export class SetCompensationManagerCall__Inputs {
  _call: SetCompensationManagerCall;

  constructor(call: SetCompensationManagerCall) {
    this._call = call;
  }

  get _compensationManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetCompensationManagerCall__Outputs {
  _call: SetCompensationManagerCall;

  constructor(call: SetCompensationManagerCall) {
    this._call = call;
  }
}

export class SetOperatorCall extends ethereum.Call {
  get inputs(): SetOperatorCall__Inputs {
    return new SetOperatorCall__Inputs(this);
  }

  get outputs(): SetOperatorCall__Outputs {
    return new SetOperatorCall__Outputs(this);
  }
}

export class SetOperatorCall__Inputs {
  _call: SetOperatorCall;

  constructor(call: SetOperatorCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get btcPubKey(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get btcAddress(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class SetOperatorCall__Outputs {
  _call: SetOperatorCall;

  constructor(call: SetOperatorCall) {
    this._call = call;
  }
}

export class SetRevenueAddressesCall extends ethereum.Call {
  get inputs(): SetRevenueAddressesCall__Inputs {
    return new SetRevenueAddressesCall__Inputs(this);
  }

  get outputs(): SetRevenueAddressesCall__Outputs {
    return new SetRevenueAddressesCall__Outputs(this);
  }
}

export class SetRevenueAddressesCall__Inputs {
  _call: SetRevenueAddressesCall;

  constructor(call: SetRevenueAddressesCall) {
    this._call = call;
  }

  get ethAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get btcPubKey(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get btcAddress(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class SetRevenueAddressesCall__Outputs {
  _call: SetRevenueAddressesCall;

  constructor(call: SetRevenueAddressesCall) {
    this._call = call;
  }
}

export class SetTransactionManagerCall extends ethereum.Call {
  get inputs(): SetTransactionManagerCall__Inputs {
    return new SetTransactionManagerCall__Inputs(this);
  }

  get outputs(): SetTransactionManagerCall__Outputs {
    return new SetTransactionManagerCall__Outputs(this);
  }
}

export class SetTransactionManagerCall__Inputs {
  _call: SetTransactionManagerCall;

  constructor(call: SetTransactionManagerCall) {
    this._call = call;
  }

  get _transactionManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetTransactionManagerCall__Outputs {
  _call: SetTransactionManagerCall;

  constructor(call: SetTransactionManagerCall) {
    this._call = call;
  }
}

export class StakeETHCall extends ethereum.Call {
  get inputs(): StakeETHCall__Inputs {
    return new StakeETHCall__Inputs(this);
  }

  get outputs(): StakeETHCall__Outputs {
    return new StakeETHCall__Outputs(this);
  }
}

export class StakeETHCall__Inputs {
  _call: StakeETHCall;

  constructor(call: StakeETHCall) {
    this._call = call;
  }
}

export class StakeETHCall__Outputs {
  _call: StakeETHCall;

  constructor(call: StakeETHCall) {
    this._call = call;
  }
}

export class StakeNFTCall extends ethereum.Call {
  get inputs(): StakeNFTCall__Inputs {
    return new StakeNFTCall__Inputs(this);
  }

  get outputs(): StakeNFTCall__Outputs {
    return new StakeNFTCall__Outputs(this);
  }
}

export class StakeNFTCall__Inputs {
  _call: StakeNFTCall;

  constructor(call: StakeNFTCall) {
    this._call = call;
  }

  get tokenIds(): Array<BigInt> {
    return this._call.inputValues[0].value.toBigIntArray();
  }
}

export class StakeNFTCall__Outputs {
  _call: StakeNFTCall;

  constructor(call: StakeNFTCall) {
    this._call = call;
  }
}

export class TerminateArbitratorWithSlashCall extends ethereum.Call {
  get inputs(): TerminateArbitratorWithSlashCall__Inputs {
    return new TerminateArbitratorWithSlashCall__Inputs(this);
  }

  get outputs(): TerminateArbitratorWithSlashCall__Outputs {
    return new TerminateArbitratorWithSlashCall__Outputs(this);
  }
}

export class TerminateArbitratorWithSlashCall__Inputs {
  _call: TerminateArbitratorWithSlashCall;

  constructor(call: TerminateArbitratorWithSlashCall) {
    this._call = call;
  }

  get arbitrator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TerminateArbitratorWithSlashCall__Outputs {
  _call: TerminateArbitratorWithSlashCall;

  constructor(call: TerminateArbitratorWithSlashCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UnpauseCall extends ethereum.Call {
  get inputs(): UnpauseCall__Inputs {
    return new UnpauseCall__Inputs(this);
  }

  get outputs(): UnpauseCall__Outputs {
    return new UnpauseCall__Outputs(this);
  }
}

export class UnpauseCall__Inputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnpauseCall__Outputs {
  _call: UnpauseCall;

  constructor(call: UnpauseCall) {
    this._call = call;
  }
}

export class UnstakeCall extends ethereum.Call {
  get inputs(): UnstakeCall__Inputs {
    return new UnstakeCall__Inputs(this);
  }

  get outputs(): UnstakeCall__Outputs {
    return new UnstakeCall__Outputs(this);
  }
}

export class UnstakeCall__Inputs {
  _call: UnstakeCall;

  constructor(call: UnstakeCall) {
    this._call = call;
  }
}

export class UnstakeCall__Outputs {
  _call: UnstakeCall;

  constructor(call: UnstakeCall) {
    this._call = call;
  }
}
