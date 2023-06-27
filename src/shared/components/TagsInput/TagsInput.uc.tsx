import React from 'react'
import { TagInputProps } from '../types/Tags'
import { TagsInput } from './TagsInput.cb'

const TagsInputComponent: React.FC<TagInputProps> = ({
  availableTags,
  register,
  error,
}) => {
  const method = TagsInput()
  return (
    <div className="flex flex-wrap items-center">
      {method.tags.map((tag) => (
        <div
          key={tag}
          className="mr-2 mb-2 cursor-pointer rounded bg-blue-500 px-2 py-1 text-white"
          onClick={() => method.handleTagRemove(tag)}
        >
          {tag}
        </div>
      ))}
      <select
        className="block  h-32 w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-base sm:leading-6"
        {...register('Categories')}
        multiple
        value={method.tags}
        onChange={method.handleCategorySelection}
        // onChange={(event) => {
        //   const selectedTag = event.target.value
        //   if (!method.tags.includes(selectedTag)) {
        //     method.setTags([...method.tags, selectedTag])
        //   }
        // }}
      >
        <option value="" disabled>
          Seleccione una categoría
        </option>
        {availableTags.map((tag) => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </select>
      <span className="text-xs italic text-red-500">{error}</span>
    </div>
  )
}

export default TagsInputComponent
