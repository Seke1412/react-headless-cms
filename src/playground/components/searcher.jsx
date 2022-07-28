import React, {useCallback} from 'react'
import { array, func } from 'prop-types'

const Searcher = ({options, onSearchResult}) => {
  const onChange = useCallback((e) => {
    const selectedValue = e.currentTarget.value

    let result
    if (Array.isArray(options) && options.length > 0) {
      result = options.find(option => String(option) === selectedValue)
    }

    if (result) {
      onSearchResult(result)
    }
  }, [options, onSearchResult])

  return (
    <aside className="searcher">
      <input
        className="searchInput"
        list="component-search"
        name="Searcher"
        placeholder="search"
        onChange={onChange}
      />
      <datalist
        className="searchDatalist"
        id="component-search"
      >
        {
          options.map((componentName) => {
            return (
              <option
                label={componentName}
                key={componentName}
                data-value={componentName}
                value={componentName}
              />
            )
          })
        }
      </datalist>
    </aside>
  )
}

Searcher.propTypes = {
  options: array,
  onSearchResult: func,
}

export default Searcher

