# Rarity-subgraph

[Rarity](https://github.com/andrecronje/rarity) is achieved via an active economy, summoners must level, gain feats, learn spells, to be able to craft gear. This allows for market driven rarity while allowing an ever growing economy. Feats, spells, and summoner gear is ommitted as part of further expansions.

# Network

This subgraph can be found on the hosted legacy service of the Graph at

https://thegraph.com/legacy-explorer/subgraph/wslyvh/rarity

It's running on the Fantom network.

## ABIs
| Name | Address |
| :--- | :--- |
| rarity | [0xce761D788DF608BD21bdd59d6f4B54b2e27F25Bb](https://ftmscan.com/address/0xce761D788DF608BD21bdd59d6f4B54b2e27F25Bb) |

# Development

The Rarity contract contains a `class` for the summoner. This is a reserved keyword in most languages and messes up the auto-generated code from `graph-cli`. You need to manually update the generated code to fix it.

1. run `yarn codegen`
1. run `yarn build`
1. you will get 3 expected errors.
1. find and replace `get class(): BigInt {` on class `summoned__Params` with `get _class(): BigInt {`
1. find and remove property `class(param0: BigInt): BigInt` from class `Rarity extends ethereum.SmartContract`
1. run `yarn build`. The build should now succeed.

# Links

[wiki](rarity.wiki)
[discord](https://discord.gg/F5URbkcvmD)
