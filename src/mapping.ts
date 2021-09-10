import { BigInt } from '@graphprotocol/graph-ts'
import { leveled, summoned } from "../generated/Rarity/Rarity"
import { Owner, Summoner } from "../generated/schema"

export function handleLeveled(event: leveled): void {
  let summoner = Summoner.load(event.params.summoner.toHex())
  if (summoner) {
    summoner.level = summoner.level.plus(BigInt.fromI32(1))
    summoner.save()
  }
}

export function handleSummoned(event: summoned): void {
  let owner = new Owner(event.params.owner.toHex())
  owner.save()

  let summoner = new Summoner(event.params.summoner.toHex())
  summoner.owner = event.params.owner.toHex()
  summoner.role = event.params._class
  summoner.level = BigInt.fromI32(1)
  
  summoner.save()
}
