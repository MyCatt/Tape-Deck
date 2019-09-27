
const API_KEY = 'AIzaSyDMbhCmhzrIsKXoGrxbqOTRzdoYiwxllag'
const CLIENT_ID = '4137827372-07nd717u8ecpq74eetr5l2sidd3649nv.apps.googleusercontent.com'
const DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"]
const SCOPES = "https://www.googleapis.com/auth/spreadsheets"

const message = document.getElementById("message")
const sheet_frame = document.getElementById("sheet_frame")
const full_frame = document.getElementById("left-view")
const split_frame = document.getElementById("right-view")
const split_button = document.getElementById("split")

split_button.addEventListener('click', () => {
    sheet_frame.src = "https://docs.google.com/spreadsheets/d/1Ak_zvY5HqoeODZJO7goJBVDxU4uFkHeS6NKsYmuztk8"
})
message.style.display = 'block'
message.addEventListener('click', () => {
    console.log('clicked')
    message.style.display = 'none'
})

sheet_frame.addEventListener('load', () => {
    console.log('loaded')
    sheet_frame.style.display = 'block'
})

sheet_frame.addEventListener('error', () => {
    console.log('Error')
    sheet_frame.style.display = 'block'
})
