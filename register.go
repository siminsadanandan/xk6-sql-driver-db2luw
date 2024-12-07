// Package ramsql contains db2luw driver registration for xk6-sql.
package ramsql

import (
	"github.com/grafana/xk6-sql/sql"

	// Blank import required for initialization of driver.
	_ "github.com/siminsadanandan/db2luw/driver"
)

func init() {
	sql.RegisterModule("db2luw")
}
