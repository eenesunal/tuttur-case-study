import axios from "axios"
import MockAdapter from "axios-mock-adapter"

import { CouponItemType } from "contexts/types"

import MOCK_EVENTS from "../mocks/events.json"

const mock = new MockAdapter(axios)

mock.onGet("/events").reply(200, MOCK_EVENTS)

mock.onPost("/betslips/play").reply(function (config) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve([201, "success"])
    }, 1000)
  })
})

export const fetchEvents = () => axios.get("/events")
export const playBetslip = (coupon: CouponItemType[]) => axios.post("/betslips/play", JSON.stringify(coupon))
