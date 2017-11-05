export const withoutKeys = (sourceObject, keysToExclude) => (
  Object.keys(sourceObject)
    .filter(key => !keysToExclude[key])
    .reduce((obj, key) => {
      obj[key] = sourceObject[key]
      return obj
    }, {})
)