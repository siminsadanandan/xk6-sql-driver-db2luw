package db2luw

import (
	_ "embed"
	"testing"

	"github.com/grafana/xk6-sql/sqltest"
)

//go:embed testdata/script.js
var script string

func TestIntegration(t *testing.T) { //nolint:paralleltest
	sqltest.RunScript(t, "db2luw", "test_db", script)
}
