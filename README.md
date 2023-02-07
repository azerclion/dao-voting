## Getting Started with Create React App

```
> npx create-react-app projectName
> cd projectName
> truffle init
> ganache
```

```
> npm install -g truffle
> npm install ganache --global
```

```
> truffle test
```

### 2월 7일 화요일

1. 한꺼번에 return값 두개 확인하기 ✔️
2. deploy (ganache) ✔️

3. migrations ✔️

```
   ❯ truffle migrate --network goerli --reset
```

### 2월 14일 화요일

1. 지갑연결
2. web3js
3. abi
4. input / result
5. styled-components

```
Starting migrations...
======================
> Network name:    'goerli'
> Network id:      5
> Block gas limit: 30000000 (0x1c9c380)


1_voting_migration.js
=====================

   Replacing 'B2'
   --------------
   > transaction hash:    0xa8eb91b1f4eb50bea1d08e96694af12e2c482ad471aed84fc62a14edf29b851f
   > Blocks: 2            Seconds: 29
   > contract address:    0x159021fe36593C6E8995c7e736817D068Be4b43F
   > block number:        8450660
   > block timestamp:     1675777668
   > account:             0x56C53049a267d05578163706C3589D44061AD9A6
   > balance:             4.990846776655952512
   > gas used:            1217036 (0x12920c)
   > gas price:           2.508674625 gwei
   > value sent:          0 ETH
   > total cost:          0.0030531473309115 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 8450661)
   > confirmation number: 2 (block: 8450662)
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.0030531473309115 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.0030531473309115 ETH
```

```
Starting migrations...
======================
> Network name:    'goerli'
> Network id:      5
> Block gas limit: 30000000 (0x1c9c380)


1_voting_migration.js
=====================

   Deploying 'B2'
   --------------
   > transaction hash:    0x66eb130950a56baded8b74856b3ff874d0530cdf37d0008c1b83dbf020d76c8d
   > Blocks: 0            Seconds: 9
   > contract address:    0x2483a842cAb95e78AB5d06f1b950dbA7A0246fED
   > block number:        8450645
   > block timestamp:     1675777404
   > account:             0x56C53049a267d05578163706C3589D44061AD9A6
   > balance:             4.993899923986864012
   > gas used:            1217036 (0x12920c)
   > gas price:           2.50450318 gwei
   > value sent:          0 ETH
   > total cost:          0.00304807053217448 ETH

   Pausing for 2 confirmations...

   -------------------------------
   > confirmation number: 1 (block: 8450646)
   > confirmation number: 2 (block: 8450647)
   > Saving artifacts
   -------------------------------------
   > Total cost:     0.00304807053217448 ETH

Summary
=======
> Total deployments:   1
> Final cost:          0.00304807053217448 ETH
```
