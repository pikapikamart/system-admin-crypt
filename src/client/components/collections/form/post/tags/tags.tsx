import { Coin } from "@/src/server/models/user.model"
import { SrOnly } from "@/styled/shared/helpers"
import { useRef, useState } from "react"
import { 
  PostTagButton,
  PostTagContainer, 
  PostTagInput, 
  PostTagInputContainer, 
  PostTagItem, 
  PostTagLabel, 
  PostTagList, 
  PostTagListbox} from "../post.styled"


type TagsProps = {
  coins: Coin[],
  selectedCoins: Coin[]
}

const Tags = ({ coins, selectedCoins }: TagsProps) =>{
  const [ isExpanded, setIsExpanded ] = useState(false)
  const [ coinTags, setCoinTags ] = useState<Coin[]>(coins?? [])
  const [ tablistIndex, setTablistIndex ] = useState(0)
  const [ selectedTags, setSelectedTags ] = useState<Coin[]>(selectedCoins?? [])
  const inputRef = useRef<HTMLInputElement | null>(null)

  const addCoinTag = ( coin: Coin ) => {
    setSelectedTags(prev => prev.concat([coin]))
  }

  const handleOnkeyUp = ( event: React.KeyboardEvent<HTMLInputElement> ) => {
    const { key } = event

    if ( key!=="Tab" ) {
      setIsExpanded(true)
    }

    if ( !event.currentTarget.value ) {
      setCoinTags(coins)
    }

    if ( key!=="ArrowDown" && key!=="ArrowUp" && key!=="Enter" && (/[a-zA-Z]/).test(event.currentTarget.value) ){
      setTablistIndex(0)
      setCoinTags(coins.filter(coin => coin.name.toLowerCase().indexOf(event.currentTarget.value.toLowerCase())!==-1))
      
      return
    }

    switch(key) {
      case "ArrowDown":
        if ( tablistIndex===coinTags?.length ) {
          setTablistIndex(1)
        } else {
          setTablistIndex(prev => prev+1)
        }
        return
      case "ArrowUp":
        if ( tablistIndex<=1 ) {
          setTablistIndex(coinTags?.length!)
        } else {
          setTablistIndex(prev => prev-1)
        }
        return
      case "Enter":
        if( tablistIndex===0 || !inputRef.current || !coins || !coinTags?.length ) {
          return
        }

        if ( !inputRef.current.value ) {
          const coin = coins[tablistIndex-1]
          inputRef.current.value = inputRef.current.textContent = coin.name
          addCoinTag(coin)
        } else {
          const lastValue = inputRef.current.value
          const filteredCoins = coins.filter(coin => coin.name.toLowerCase().indexOf(lastValue.toLowerCase())!==-1)
          const coin = filteredCoins[tablistIndex-1]
          inputRef.current.value = inputRef.current.textContent = coin.name
          addCoinTag(coin)
        }
        
        setCoinTags(coins.filter(coin => coin.name.toLowerCase().indexOf(coin.name.toLowerCase())))
    }
  }

  const handleOptionSelect = ( coin: Coin ) =>{
    if ( !inputRef.current || selectedTags.find(tag => tag.id===coin.id) ) {

      return
    }

    inputRef.current.value = coin.name
    inputRef.current.textContent = coin.name
    setCoinTags(coins.filter(coin => coin.name.toLowerCase().indexOf(coin.name.toLowerCase())))
    addCoinTag(coin)
  }

  return (
    <PostTagContainer>
      <PostTagInputContainer onBlur= { () => {
        setTimeout(() =>{
          setIsExpanded(false)
        }, 100)
      } }>
      <PostTagLabel htmlFor="tags">Add coin tags</PostTagLabel>
        <PostTagInput
          id="tags"
          type="text"
          role="combobox"
          ref={ inputRef }
          onClick={ () => setIsExpanded(prev => !prev) }
          onKeyUp={ handleOnkeyUp }
          aria-expanded={ isExpanded }
          aria-autocomplete="list"
          aria-controls="coins-listbox"
          aria-activedescendant=""
          autoComplete="off"  />
        <PostTagListbox
          id="coins-listbox"
          aria-label="coins"
          role="listbox">
            { coinTags?.map( (coin, index) => (
              <li
                key={ coin.id }
                id={ coin.id }
                role="option"
                onClick={ () => handleOptionSelect(coin) }
                ref ={ el => {
                  if ( index+1===tablistIndex ) {
                    el?.scrollIntoView(false)
                    
                    if ( inputRef.current ) {
                      inputRef.current.setAttribute("aria-activedescendant", coin.id)
                    }
                  }
                } }
                aria-selected={ index+1===tablistIndex }>{ coin.name }</li>
            ) ) }
        </PostTagListbox>
      </PostTagInputContainer>
      <PostTagList as="ul">
        { selectedTags.map(tag => (
          <PostTagItem key={ tag.id }>
            <p>{ tag.symbol }</p>
            <PostTagButton
              onClick={ () => {
                setSelectedTags(prev => prev.filter(coin => coin.id!==tag.id))
              } }>
              <SrOnly>Remove { tag.name }</SrOnly>
            </PostTagButton>
          </PostTagItem>
        )) }
      </PostTagList>
    </PostTagContainer>
  )
}


export default Tags