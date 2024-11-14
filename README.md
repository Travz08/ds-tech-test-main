# DroneShield Software Tech Test

DroneShield's mission is to provide the best Counter-drone defence in an emerging industry.

This code challenge involves building a Counter UAS simulator and user interface for the tracking of drones.

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
