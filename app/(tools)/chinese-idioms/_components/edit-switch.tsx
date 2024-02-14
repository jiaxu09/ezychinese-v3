'use client'
import React from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { useUser } from '@/lib/store/user'
import { useChineseIdiomEdit } from '@/lib/store/idiomEdit'

const EditSwitch = () => {
  const user = useUser((state) => state.user)

  const edit = useChineseIdiomEdit((state) => state.edit)
  const setEdit = useChineseIdiomEdit((state) => state.setEdit)

  if (!user || user.role !== 'admin') return <></>

  return (
    <div className="flex items-center space-x-2">
      <Switch
        aria-label="edit switch"
        id="edit-mode"
        checked={edit}
        onCheckedChange={setEdit}
      >
        Edit
      </Switch>
      <Label htmlFor="edit-mode">Edit Mode</Label>
    </div>
  )
}

export default EditSwitch
