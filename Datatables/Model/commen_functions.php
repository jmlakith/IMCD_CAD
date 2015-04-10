<?php

class settings {

   

    function prepareSelectQueryForJSON($query) {
        $data = array();
        $result = mysql_query($query);
         
        while ($row = mysql_fetch_assoc($result)) {
            $data[] = $row;
        }
        echo json_encode($data);
    }

    function getNextAutoIncrementID($table) {
        $result = mysql_query("SHOW TABLE STATUS LIKE '" . $table . "'");
        $row = mysql_fetch_array($result);
        return $nextId = $row['Auto_increment'];
    }

    function getFirstKey($arr) {
        reset($arr);
        return key($arr);
    }

    function prepareAjaxSelectBox($array, $value_name, $data_name, $selectedValue = false, $error_msg = ' -- No Data Found -- ') {
        if (!empty($array)) {
            foreach ($array as $data) {
                if (isset($selectedValue) && $data[$value_name] == $selectedValue) {
                    echo '<option value="' . $data[$value_name] . '" selected>' . $data[$data_name] . '</option>';
                } else {
                    echo '<option value="' . $data[$value_name] . '">' . $data[$data_name] . '</option>';
                }
            }
        } else {
            echo '<option value="0">' . $error_msg . '</option>';
        }
    }

    function autoRedict($redirectPath, $time) {
        echo '<script type="text/javascript">
		window.setTimeout(function() {
		window.location.href = "' . $redirectPath . '";
		},' . $time . ')
             </script>';
    }

    function prepareSelectQuery($query) {
        $data = array();
        $result = mysql_query($query) or die(mysql_error());
        while ($row = mysql_fetch_assoc($result)) {
            $data[] = $row;
        }
        return $data;
    }

    function prepareCommandQuery($query, $successMsg, $errorMsg) {
        $save = mysql_query($query);
        if (isset($save) && $save) {
            echo '<div class="alert alert-success">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>Success!</strong> ' . $successMsg . ' </div>';
        } else {
            echo '<div class="alert alert-danger">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>Error!</strong> ' . $errorMsg . ' </div>';
        }
    }

    function prepareCommandQueryForAlertify($query, $successMsg, $errorMsg) {
        $save = mysql_query($query);
        if (isset($save) && $save) {
            echo json_encode(array(array("msgType" => 1, "msg" => $successMsg)));
        } else {
            echo json_encode(array(array("msgType" => 2, "msg" => $errorMsg)));
        }
    }

    function prepareQueryCount($tableName) {
        $count = 0;
        $query = "SELECT COUNT(*) as count FROM " . $tableName;
        $countData = $this->getSelectQuaryForAllData($query);
        return $countData[0]['count'];
    }

    function prepareQueryCountByCondition($tableName, $colName, $colValue) {
        $count = 0;
        $query = "SELECT COUNT(*) as count FROM " . $tableName . " WHERE " . $colName . " = '" . $colValue . "'";
        return $countData[0]['count'];
    }

    function getallitemtypefor_combo() {
        $data = array();
        $result = mysql_query("SELECT
pr_emp_item_types.id,
pr_emp_item_types.name
FROM
pr_emp_item_types");
        while ($row = mysql_fetch_assoc($result)) {
            $data[] = $row;
        }
        return $data;
    }

}
