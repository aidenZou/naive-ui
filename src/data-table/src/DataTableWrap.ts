import { computed, defineComponent, h, useAttrs, useSlots } from 'vue'
import DataTable from './DataTable'
import { dataTableProps, type TableBaseColumn, type TableColumnGroup, type TableColumn } from './interface'
import { isArray, isNil, isUndefined } from 'lodash-es'
import { useConfig } from '../../_mixins'

export default defineComponent({
  name: 'DataTableWrap',
  props: dataTableProps,
  inheritAttrs: false,
  setup (props) {
    const attrs = useAttrs()
    const slots = useSlots()

    const { defaultDataTableColumnResizable } = useConfig(props)

    const setColumn = (column: TableColumn<any>): void => {
      if (column.resizable === false) {
        return
      }

      if (!defaultDataTableColumnResizable) {
        return
      }

      // fixed
      if (['left', 'right'].includes((column as TableBaseColumn).fixed as string)) {
        return
      }

      column.resizable = true

      if (isUndefined(column.minWidth)) {
        if (!isNil(column.width)) {
          column.minWidth = column.width
        } else {
          column.minWidth = 80
        }
      }

      if (isUndefined(column.maxWidth)) {
        column.maxWidth = 600
      }
    }

    const _columns = computed(() => {
      return (props.columns || []).map((column) => {
        const _children = (column as TableColumnGroup).children

        if (isArray(_children) && _children.length > 0) {
          _children.forEach((_column) => {
            setColumn(_column)
          })
        } else {
          setColumn(column)
        }

        return column
      })
    })

    return () => h(DataTable, { ...attrs, ...props, columns: _columns.value }, slots)
  }
})
