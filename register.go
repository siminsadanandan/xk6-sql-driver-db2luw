// Package ramsql contains db2luw driver registration for xk6-sql.
package db2luw

import (
	"github.com/grafana/xk6-sql/sql"

	// Blank import required for initialization of driver.
        _ "github.com/ibmdb/go_ibm_db"
)

func init() {
	sql.RegisterModule("db2luw")
}
