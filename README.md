# DroneShield Software Tech Test

DroneShield's mission is to provide the best Counter-drone defence in an emerging industry.

This code challenge involves building a Counter UAS simulator and user interface for the tracking of drones.

<<<<<<< HEAD
=======
### Run the sample using the Go backend

From the root of the project:

```
docker compose up --build
```

---

### Run the sample using the Typescript backend

First, you will need a Redis server.

On Mac:

```
brew install redis
brew services start redis
```

(When finished, you can remove redis with `brew remove redis`)

On PC:

See: https://redis.io/docs/latest/operate/oss_and_stack/install/install-redis/install-redis-on-windows/

Once Redis is installed, from the root of the project:

Run the publisher:

```
cd drone_publisher_ts
npm i
npm run dev
```

Run the subscriber:

```
cd drone_subscriber_ts
npm i
npm run dev
```

---

>>>>>>> f1e1818 (Initialise Root Folder)
### Frontend

First, make sure that the backend is running.

Then from the root of the project:

```
cd drone_frontend
npm i
npm run dev
```

The UI will be available here: http://localhost:5173

---

<<<<<<< HEAD

=======
>>>>>>> f1e1818 (Initialise Root Folder)
### Conclusion

(i) assumptions and decisions that I made whilst approaching these tasks

- Task 1 - WebSocket for Drone Movement:
- Task 2 - Tracking Line:

  > I prioritised these tasks first as they seemed vital to the application and were straightforward to complete.

- Task 5 - Improvements and Bug Fixes:

  > I made minor architectural adjustments mainly for readability, added error handling for WebSocket connections, and ensured proper closure in the useEffect cleanup function.

- Task 6 - Additional Flight Patterns:
  > I attempted to implement additional flight patterns beyond the existing ‘random’ pattern. The frontend UI to switch patterns is integrated, but I wasn’t able to complete the backend logic for these additional patterns.

(ii) ideas for further improvements in my solutions

- Given more time, I would focus on improving the UI by implementing smoother transitions for the drone as it moves between coordinates.

(iii) what would need to be done to make it production ready including testing.

- Conduct extensive testing on core components, focusing on WebSocket updates and map rendering.
- Strengthen error handling.
- Set up a CI/CD pipeline for automated testing and smooth deployment.
<<<<<<< HEAD
=======

p.s I originally had just the drone_frontend folder pushed to my repository it should now be resolved, apologies
>>>>>>> f1e1818 (Initialise Root Folder)
