// Copyright (C) 2007-2017, GoodData(R) Corporation. All rights reserved.
export const withoutKeys = (sourceObject, keysToExclude) => (
  Object.keys(sourceObject)
    .filter(key => !keysToExclude[key])
    .reduce((obj, key) => {
      obj[key] = sourceObject[key]
      return obj
    }, {})
)