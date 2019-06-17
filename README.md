# nuber-server

Server for the (N)Uber Clone Course on Nomad Academy. GraphQl, Typescript, NodeJS

## POSTGRES DOKER KITEMATIC Environment Variables

POSTGRES_USER: username

POSTGRES_PASSWORD: password

cli

psql -U username

## dotenv

.env 파일의 값들을 불러온다

dotenv.config();

## helmet

보안을 위한 미들웨어 요청 떄마다 미들웨어가 요청을 잠시 멈추고 검사한 후에 위협요소가 없다고 판단되면 요청을 계속 진행한다.

## Resolvers

### Public Resolvers:

- [x] Sign In / Sign Up with Facebook
- [x] Sign In with Email
- [x] Start Phone Number Verification
- [ ] Complete Phone Number Verification
- [ ] Sign Up with Email

---

### Authentication:

- [ ] Generate JWT
- [ ] Verifiy JWT

---

### Private Resolvers:

- [ ] Get my Profile
- [ ] Request Email Verification
- [ ] Complete Email Verification
- [ ] Update my Profile
- [ ] Toggle Driving Mode
- [ ] Report Location / Orientation
- [ ] Add Place
- [ ] Edit Place
- [ ] Delete Place
- [ ] Get My Places
- [ ] See Nearby Drivers
- [ ] Subscribe to Nearby Drivers
- [ ] Request a Ride
- [ ] Get Nearby Ride Requests
- [ ] Subscribe to Nearby Ride Requests
- [ ] Update Ride Status
- [ ] Get Ride
- [ ] Subscribe to Ride Status
- [ ] Create a Chat Room
- [ ] Get Chat Room Messages
- [ ] Send a Chat Message
- [ ] Subscribe to Chat Room Messages

## Code Challenge

- [ ] Get Ride History
- [ ] See Ride Detail
