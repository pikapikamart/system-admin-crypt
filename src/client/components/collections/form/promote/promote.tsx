import { useFormValidation } from "@/lib/hooks"
import { trpc } from "@/lib/trpc"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { InputField } from "../../input"
import { 
  InputContainer, 
  InputError, 
  InputLabel, 
  InputWrapper } from "../../input/input.styled"
import { FormOption, FormOptions } from "../form.styled"
import { 
  PromoteFormWrapper,
  ImageInputContainer,
  NftImage,
  NftDescription,
  PromoteInputsContainer,
  PromoteLiveRadioContainer
 } from "./promote.styled"


type PromoteProps = {
  exit: () => void
}

const Promote = ({ exit }: PromoteProps) =>{
  const { 
    addFieldRef,
    handleFormSubmit,
    isValidData,
    getFieldsRef } = useFormValidation()
  const [ nftImage, setNftImage ] = useState("")
  const [ isLive, setIsLive ] = useState(true)
  const router = useRouter()
  const mutation = trpc.useMutation(["nft.create"])

  const handleImageAddition = ( event: React.ChangeEvent<HTMLInputElement> ) =>{
    if ( event.target.files ) {
      const imageFile = event.target.files[0];
      const reader = new FileReader();

      reader.onloadend = ( readerEvent ) =>{
        const img = document.createElement("img");

        img.onload = ( imgEvent ) => {
          const canvas = document.createElement("canvas");
          canvas.height = 224;
          canvas.width = 224;
          const ctx = canvas.getContext("2d");
          ctx?.drawImage(img, 0, 0, 224, 224);
          const url = canvas.toDataURL(imageFile.type);
          setNftImage(url)
        }

        img.src = readerEvent.target?.result as string;
      }

      if ( imageFile ) {
        reader.readAsDataURL(imageFile);
      }
    }
  }

  const handleLiveChange = ( event: React.ChangeEvent<HTMLInputElement> ) =>{
    const { value } = event.target

    setIsLive(value==="false"? false : true)
  }

  useEffect(() =>{
    if ( isValidData ) {
      const nftData = getFieldsRef().reduce((accu, cur) =>{
        accu[cur.name] = cur.value

        return accu
      }, {})

      nftData.image = nftImage
      nftData.isLive = isLive

      mutation.mutate(nftData)
    }
  }, [ isValidData ])

  useEffect(() =>{
    if ( mutation.isSuccess ) {
      router.reload()
    }
  }, [ mutation.isSuccess ])

  return(
    <PromoteFormWrapper
      as="form"
      onSubmit={ handleFormSubmit }>
        <ImageInputContainer>
          <InputContainer>
            <InputLabel htmlFor="image">Project's image</InputLabel>
            { nftImage && (
              <NftImage 
                src={ nftImage }
                alt="" />
            ) }
            <InputWrapper
              as="input"
              type="file"
              accept="image/jpeg,image/png"
              id="image"
              name="image"
              ref={ addFieldRef }
              onChange={ handleImageAddition }
              aria-required="true" />
            <InputError>Image is required</InputError>
          </InputContainer>
        </ImageInputContainer>
        <InputField
            labelText="Project's name"
            name="name"
            type="text"
            addFieldRef={ addFieldRef } />
        <InputContainer style={{ "maxWidth": "100%" }}>
          <InputLabel htmlFor="description">Project's description</InputLabel>
          <NftDescription
            as="textarea"
            id="description"
            name="description"
            ref={ addFieldRef }
            aria-required="true" />
          <InputError>Description is required</InputError>
        </InputContainer>
        <PromoteInputsContainer>
          <InputField
            labelText="Twitter Link"
            name="twitter"
            type="text"
            addFieldRef={ addFieldRef } />
          <InputContainer>
            <InputLabel htmlFor="binance">Binance Link (optional)</InputLabel>
            <InputWrapper
              as="input"
              type="text"
              id="binance"
              name="binance"
              ref={ addFieldRef }/>
          </InputContainer>
        </PromoteInputsContainer>
        <PromoteInputsContainer>
          <InputContainer as="fieldset">
            <InputLabel 
              as="legend">Is Project Live?</InputLabel>
              <PromoteLiveRadioContainer>
                <InputLabel htmlFor="live-yes">Yes</InputLabel>
                <InputWrapper
                  as="input"
                  type="radio"
                  id="live-yes"
                  value="true"
                  onChange={ handleLiveChange }
                  defaultChecked
                  name="live"/>
              </PromoteLiveRadioContainer>
              <PromoteLiveRadioContainer>
                <InputLabel htmlFor="live-no">No</InputLabel>
                <InputWrapper
                  as="input"
                  type="radio"
                  id="live-no"
                  value="false"
                  onChange={ handleLiveChange }
                  name="live"/>
              </PromoteLiveRadioContainer>
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="website">Website Link (optional)</InputLabel>
            <InputWrapper
              as="input"
              type="text"
              id="website"
              name="website"
              ref={ addFieldRef }/>
          </InputContainer>
        </PromoteInputsContainer>
        <FormOptions>
          <FormOption
            colored="blue"
            type="submit">Create
          </FormOption>
          <FormOption
            type="button"
            onClick={ exit }>Close
          </FormOption>
        </FormOptions>
    </PromoteFormWrapper>
  )
}


export default Promote