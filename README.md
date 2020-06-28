# Query

* Use native fetch vs `axios` or any other library (there is no hard requirement on browser support).
* Pass data for single and multiple children components.
* Make parallel requests using `Promise.allSettled` (vs using `Promise.all`).
* Return wrapper object as a response.

```
{
  status: "fulfilled",
  value: {...}
}
```

## Usage

Pass string to send `GET` request:

```
<Query urls={`https://api.flipsidecrypto.com/api/v2/projects/metrics?api_key=${KEY}`} />
```

Pass objects with a method, headers, and body:

```
<Query urls={{
  url: `https://api.flipsidecrypto.com/api/v2/metrics/rank/projects?api_key={{key}}`,
  method: `POST`,
  headers: {
    'Content-Type': 'application/json'
  },
  body: {
    metric: `fcas`,
    change_over_in_days: 7
  }
}} />
```

Pass array with strings, objects, or a mix of both:

```
<Query urls={[
  {
    url: `https://api.flipsidecrypto.com/api/v2/metrics/rank/projects?api_key={{KEY}}`,
    method: `POST`,
    headers: {
      'Content-Type': 'application/json'
    },
    body: {
      metric: `fcas`,
      change_over_in_days: 7
    }
  },
  `https://api.flipsidecrypto.com/api/v2/projects/metrics?api_key=${KEY}`
]} />
```
