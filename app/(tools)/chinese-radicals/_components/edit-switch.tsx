'use client'
import React from 'react'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { useChineseRadicalEdit } from '@/lib/store/radicalEdit'
import { useUser } from '@/lib/store/user'

const EditSwitch = () => {
  const user = useUser((state) => state.user)

  const edit = useChineseRadicalEdit((state) => state.edit)
  const setEdit = useChineseRadicalEdit((state) => state.setEdit)

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
