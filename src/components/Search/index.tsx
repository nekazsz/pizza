import React, { useCallback, useState } from 'react'
import styles                           from './Search.module.scss'


import { useDispatch }    from 'react-redux'
import { setSearchValue } from '../../redux/filter/slice'

import _debounce from 'lodash/debounce'
import searchSvg from '../../assets/img/search.svg'


const Search: React.FC = () => {
	const dispatch = useDispatch()
	const [ value, setValue ] = useState<string>('')

	const onSearch = useCallback(
		_debounce((str: string) => {
			dispatch(setSearchValue(str))
		}, 1000), []
	)

	const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
		onSearch(e.target.value)
	}

	return (
		<div className={ styles.root }>
			<img className={ styles.icon } src={ searchSvg } alt=''/>
			<input type='search' onChange={ (e) => onChangeValue(e) } value={ value }
				   placeholder='Поиск пиццы'/>
		</div>
	)
}

export default Search