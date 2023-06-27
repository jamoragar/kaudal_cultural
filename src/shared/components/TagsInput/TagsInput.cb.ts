import { useState } from 'react'
export const TagsInput = () => {
  const [tags, setTags] = useState<string[]>([])

  const handleTagRemove = (tag: string) => {
    setTags(tags.filter((t) => t !== tag))
  }
  const handleCategorySelection = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedTag = event.target.value
    if (!tags.includes(selectedTag)) {
      setTags([...tags, selectedTag])
    }
  }

  // onChange={(event) => {
  //   const selectedTag = event.target.value
  //   if (!method.tags.includes(selectedTag)) {
  //     method.setTags([...method.tags, selectedTag])
  //   }
  // }}

  return {
    tags,
    setTags,
    handleTagRemove,
    handleCategorySelection,
  }
}
