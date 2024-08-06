<a id="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Digital Art Marketplace dApp</h3>
  <p align="center">
    The Digital Art Marketplace dApp documentation.
  </p>
</div>

## About

<p>
    Digital Art Marketplace is a decentralized application (dApp) powered by <a href="https://docs.cartesi.io/cartesi-rollups/1.3/">Cartesi</a> rollups technology.
</p>
<p>
    This dApp allows artists to list their digital art, buyers to purchase art using tokens, and verifies and records the ownership of digital art.
</p>

## Getting Started

Below you'll find instructions on how to set up this dApp locally.

### Prerequisites

Here are some packages you need to have installed on your PC:

* [nodejs](https://nodejs.org/en), [npm](https://docs.npmjs.com/cli/v10/configuring-npm/install), [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)
* [docker](https://docs.docker.com/get-docker/)
* [cartesi-cli](https://docs.cartesi.io/cartesi-rollups/1.3/development/migration/#install-cartesi-cli)
  ```sh
  npm install -g @cartesi/cli
  ```

### Installation

1. Clone this repo
   ```sh
   git clone https://github.com/AnyachebeluG/digital-art-dapp.git
   ```
2. Install NPM packages
   ```sh
   yarn install
   ```
3. Build and run the dApp via `cartesi-cli`
   ```sh
   cartesi build
   ```
   and
   ```sh
   cartesi run
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Usage

Here you can access examples of dApp communication and resources consumption.

There are these resources available on this dApp:

### Advanced handlers

* #### listArt
  ```js
    description — list a digital art.
    param data — {owner: address ("0x..."), title: string, description: string, price: number, imageUrl: string}
  ```
  data sample
  ```json
    {
        "action":"listArt",
        "data":{
            "owner":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266",
            "title":"Sunset",
            "description":"Beautiful sunset art",
            "price":100,
            "imageUrl":"https://example.com/sunset.jpg"
        }
    }
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a226c697374417274222c202264617461223a7b226f776e6572223a22307866333946643665353161616438384636463463653661423838323732373963666646623932323636222c20227469746c65223a2253756e736574222c20226465736372697074696f6e223a2242656175746966756c2073756e73657420617274222c20227072696365223a3130302c2022696d61676555726c223a2268747470733a2f2f6578616d706c652e636f6d2f73756e7365742e6a7067227d7d
  ```
  interact
    - *via `cartesi cli`*, access your terminal in another window and input these instructions below:

    ```sh
    cartesi send generic \
        --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
        --chain-id=31337 \
        --rpc-url=http://127.0.0.1:8545 \
        --mnemonic-passphrase='test test test test test test test test test test test junk' \
        --input=0x7b22616374696f6e223a226c697374417274222c202264617461223a7b226f776e6572223a22307866333946643665353161616438384636463463653661423838323732373963666646623932323636222c20227469746c65223a2253756e736574222c20226465736372697074696f6e223a2242656175746966756c2073756e73657420617274222c20227072696365223a3130302c2022696d

61676555726c223a2268747470733a2f2f6578616d706c652e636f6d2f73756e7365742e6a7067227d7d
    ```
* #### getAllArt
  ```js
    description — retrieve all the digital art listed.
    param data — []
  ```
  data sample
  ```json
    {
        "action":"getAllArt",
        "data":[]
    }
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a22676574416c6c417274222c202264617461223a5b5d7d
  ```
  interact
    - *via `cartesi cli`*, access your terminal in another window and input these instructions below:

    ```sh
    cartesi send generic \
        --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
        --chain-id=31337 \
        --rpc-url=http://127.0.0.1:8545 \
        --mnemonic-passphrase='test test test test test test test test test test test junk' \
        --input=0x7b22616374696f6e223a22676574416c6c417274222c202264617461223a5b5d7d
    ```
* #### getArtById
  ```js
    description — retrieve a digital art by ID.
    param data — [artId: string]
  ```
  data sample
  ```json
    {
        "action":"getArtById",
        "data":["3d7f6f64-ef85-470e-aea0-3a1ac1192c6f"]
    }
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a2267657441727442794964222c202264617461223a5b2233643766366636342d656638352d343730652d616561302d336131616331313932633666225d7d
  ```
  interact
    - *via `cartesi cli`*, access your terminal in another window and input these instructions below:

    ```sh
    cartesi send generic \
        --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
        --chain-id=31337 \
        --rpc-url=http://127.0.0.1:8545 \
        --mnemonic-passphrase='test test test test test test test test test test test junk' \
        --input=0x7b22616374696f6e223a2267657441727442794964222c202264617461223a5b2233643766366636342d656638352d343730652d616561302d336131616331313932633666225d7d
    ```

* #### purchaseArt
  ```js
    description — purchase a digital art by ID.
    param data — {artId: string, buyer: address ("0x...")}
  ```
  data sample
  ```json
    {
        "action":"purchaseArt",
        "data":{
            "artId":"3d7f6f64-ef85-470e-aea0-3a1ac1192c6f",
            "buyer":"0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
        }
    }
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a227075726368617365417274222c202264617461223a7b226172744964223a2233643766366636342d656638352d343730652d616561302d336131616331313932633666222c20226275796572223a22307866333946643665353161616438384636463463653661423838323732373963666646623932323636227d7d
  ```
  interact
    - *via `cartesi cli`*, access your terminal in another window and input these instructions below:

    ```sh
    cartesi send generic \
        --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
        --chain-id=31337 \
        --rpc-url=http://127.0.0.1:8545 \
        --mnemonic-passphrase='test test test test test test test test test test test junk' \
        --input=0x7b22616374696f6e223a227075726368617365417274222c202264617461223a7b226172744964223a2233643766366636342d656638352d343730652d616561302d336131616331313932633666222c20226275796572223a22307866333946643665353161616438384636463463653661423838323732373963666646623932323636227d7d
    ```

* #### verifyOwnership
  ```js
    description — verify the ownership of a digital art.
    param data — [artId: string]
  ```
  data sample
  ```json
    {
        "action":"verifyOwnership",
        "data":["3d7f6f64-ef85-470e-aea0-3a1ac1192c6f"]
    }
  ```
  hex sample
  ``` 
  0x7b22616374696f6e223a227665726966794f776e657273686970222c202264617461223a5b2233643766366636342d656638352d343730652d616561302d336131616331313932633666225d7d
  ```
  interact
    - *via `cartesi cli`*, access your terminal in another window and input these instructions below:

    ```sh
    cartesi send generic \
        --dapp=0xab7528bb862fb57e8a2bcd567a2e929a0be56a5e \
        --chain-id=31337 \
        --rpc-url=http://127.0.0.1:8545 \
        --mnemonic-passphrase='test test test test test test test test test test test junk' \
        --input=0x7b22616374696f6e223a227665726966794f776e657273686970222c202264617461223a5b2233643766366636342d656638352d343730652d616561302d336131616331313932633666225d7d
    ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>